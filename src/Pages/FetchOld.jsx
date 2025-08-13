import { useQuery } from "@tanstack/react-query";
import { getFoodData } from "../api/apiInstance";

const FetchOld = () => {
  //useQuery;
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['foodData', 'chicken_breast'],
    queryFn: getFoodData,
    gcTime: 10000, //collect the garbage after 10seconds;
    // staleTime: 10000, //keep data fresh for atleast 10 seconds;
    //there will be no refetch before 10 seconds;

    //the concept of polling;
    //to automatically fetch the data after a perticular innterval of time;
    refetchInterval: 1000,
    //fetch the data at every 1 second;

    //when we are on the other tab, and still wants that data still gets fetched
    //then for that only prpose  we can use; 
    // refetchIntervalInBackground: true,
  })

  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Error : {error.message || "Some Error Occured"}</p>

  return (
    <div className="card-container">
      <ul className="card">
        {data?.map((curEle) => {
          const { strMeal, strMealThumb, idMeal } = curEle;
          return (
            <li key={idMeal}>
              <img src={strMealThumb} alt={strMeal} />
              <h3>{strMeal}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default FetchOld;