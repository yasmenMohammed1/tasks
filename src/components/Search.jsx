import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {decrement, incrementCount } from "../store/actions/actionFav"
export default function Search(props) {
  // const count = useSelector((state) => state.count.count);
  
    const [searchText , setSearchText] = useState("")
    // const dispatch = useDispatch()
  return (
    // <div className='search'>
    //     <input type="text" value={searchText}  onChange={e=>setSearchText(e.target.value)} />
    //     <button onClick={()=>props.getSearchMovies(searchText)}>Search</button>
    // </div>
    <div className=" search">
    <input type="search" value={searchText} onChange={e=>setSearchText(e.target.value)} class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
    <button onClick={()=>props.getSearchMovies(searchText)} type="button" class="btn btn-outline-primary">search</button>
    {/* <button onClick={()=>dispatch(incrementCount(5))}>Increment Count From Store {count}</button>
    <button onClick={()=>dispatch(decrement(5))}>Decrement Count From Store {count}</button> */}

  </div>
  )
}
