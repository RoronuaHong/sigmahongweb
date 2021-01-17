import LoginStore from './LoginStore'
import AlgorithmStore from './AlgorithmStore'
import CppSummaryStore from './CppSummaryStore'
import BCppSummaryStore from './BCppSummaryStore'

export class RootStore {
    cppSummaryStore = new CppSummaryStore(this)
    algorithmStore = new AlgorithmStore(this)
    loginStore = new LoginStore(this)
    bcppSummaryStore = new BCppSummaryStore(this)
}

export default new RootStore()
