import LoginStore from './LoginStore'
import AlgorithmStore from './AlgorithmStore'
import CppSummaryStore from './CppSummaryStore'
import BCppSummaryStore from './BCppSummaryStore'
import BAlgorithmStore from './BAlgorithmStore'

export class RootStore {
    algorithmStore = new AlgorithmStore(this)
    balgorithmStore = new BAlgorithmStore(this)

    cppSummaryStore = new CppSummaryStore(this)
    bcppSummaryStore = new BCppSummaryStore(this)

    loginStore = new LoginStore(this)
}

export default new RootStore()
