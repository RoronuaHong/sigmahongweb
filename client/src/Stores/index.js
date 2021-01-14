import LoginStore from './LoginStore'
import AlgorithmStore from './AlgorithmStore'
import CppSummaryStore from './CppSummaryStore'

export class RootStore {
    cppSummaryStore = new CppSummaryStore(this)
    algorithmStore = new AlgorithmStore(this)
    loginStore = new LoginStore(this)
}

export default new RootStore()
