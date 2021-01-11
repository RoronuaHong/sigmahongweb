import { 
  observable,
  makeObservable,
} from 'mobx'

class AlgorithmStore {
  constructor() {
    makeObservable(this)
  } 

  @observable others = '456'
}

export default AlgorithmStore
