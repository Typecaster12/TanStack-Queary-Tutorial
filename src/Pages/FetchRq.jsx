import { useQuery } from '@tanstack/react-query';
import { postsData } from '../api/apiInstance';

const FetchRq = () => {
  //useQuery hook;
  //one of the core hook which is used to fetch, manage, cache ad other things with data;
  //if useQuery we have alot of states but for now we only use Its Data state;
  //data = the fetched data we get;
  //isPending = loading state;
  //isError = error state;
  //error = the actual error we get;
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: postsData,

    //gcTime;
    gcTime: 10000, //collect the garbage(unused data) after 10seconds;

    //staleTime;
    /* commented so that i can use polling */
    /*
    staleTime: 10000, //keep data fresh for atleast 10 seconds;
    //there will be no refetch before 10 seconds;
    */

    //polling;
    //Polling in TanStack Query means automatically refetching data at a regular time interval;
    //but if we want to use polling, then staleTime cannot be used;
    //as it stops the api to refetch,
    refetchInterval: 1000, //after every one second, refetch the data from server;
    //above code works only when we are on that page only, if we want it to fetch the data even when we are on the other tab, then we can use;
    // refetchIntervalInBackground: true,
  });

  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Error : {error.message || "Something Went Wrong"}</p>

  return (
    <div className="card-container">
      <ul className="card">
        {data?.map((curEle) => {
          const { id, title, body } = curEle;
          return (
            <li key={id} className="card-item">
              <h3 className="card-title">{title}</h3>
              <p className="card-body">{body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default FetchRq;