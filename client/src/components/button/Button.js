import { observer } from 'mobx-react-lite';
import React, {useContext} from 'react'
import { StoreContext, StoreExample } from '../../store/base.store'

function Button() {
  const { message } = useContext(StoreContext);

  return (
    <div>Button</div>
  )
}

export default observer(Button);
