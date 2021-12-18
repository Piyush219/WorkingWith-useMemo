import React, { useEffect, useMemo, useState } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  
  const { items } = props;
  const [orderItems, setOrderItems] = useState(items)
  const[buttonTitle, setButtonTitle] = useState('Descending Order')
  const [check, setCheck]=useState([])


  useEffect(() => {
  setCheck([...sortedList])  
  },[]);

  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.sort((a, b) => a - b);
  }, [items]); 
  console.log('DemoList RUNNING');
  
  const OrderHandler = () => {
    
    if(buttonTitle === 'Descending Order'){
      setOrderItems(()=>{
        check.sort((a,b) => b-a)
      });
      console.log(sortedList)
      setButtonTitle('Ascending Order')
    }
    if(buttonTitle === 'Ascending Order'){
      setCheck([...sortedList])
      // setOrderItems(()=>{
      //   sortedList.sort((a,b) => a-b)
      // });
      setButtonTitle('Descending Order')
    }

  }




  // const { DsortedList } = useMemo(() => {
  //   return items.sort((a, b) => b-a);
  // }, [items]);

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {check.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div>
        <button type='button' className={classes.button} onClick={OrderHandler}>{buttonTitle}</button>
      </div>
    </div>
  );
};

export default React.memo(DemoList);
