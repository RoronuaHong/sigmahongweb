import LoginStore from './LoginStore'
import AlgorithmStore from './AlgorithmStore'
import CppSummaryStore from './CppSummaryStore'
import BCppSummaryStore from './BCppSummaryStore'
import BAlgorithmStore from './BAlgorithmStore'
import BDatastructureStore from './BDatastructureStore'

export class RootStore {
    algorithmStore = new AlgorithmStore(this)
    cppSummaryStore = new CppSummaryStore(this)

    balgorithmStore = new BAlgorithmStore(this)
    bcppSummaryStore = new BCppSummaryStore(this)
    bdatastructureStore = new BDatastructureStore(this)

    loginStore = new LoginStore(this)
}

export default new RootStore()
