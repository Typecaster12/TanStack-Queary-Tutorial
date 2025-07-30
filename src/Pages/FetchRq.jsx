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