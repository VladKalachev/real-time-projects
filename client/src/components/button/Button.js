import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react'
import { StoreContext, StoreExample } from '../../store/base.store'

function Button() {
  const { message } = useContext(StoreContext);

  console.log(1111, message);
  return (
    <div>Button</div>
  )
}

export default observer(Button);
