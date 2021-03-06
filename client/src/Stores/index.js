import LoginStore from './LoginStore'
import AlgorithmStore from './AlgorithmStore'
import CppSummaryStore from './CppSummaryStore'
import BCppSummaryStore from './BCppSummaryStore'
import BAlgorithmStore from './BAlgorithmStore'
import BDatastructureStore from './BDatastructureStore'
import BUEBasisStore from './BUEBasisStore'
import BUEProdStore from './BUEProdStore'
import ChromeStore from './ChromeStore'
import BMusicStore from './BMusicStore'

export class RootStore {
    algorithmStore = new AlgorithmStore(this)
    cppSummaryStore = new CppSummaryStore(this)

    bMusicStore = new BMusicStore(this)
    bChromeStore = new ChromeStore(this)
    bUEBasisStore = new BUEBasisStore(this)
    bUEProdStore = new BUEProdStore(this)
    balgorithmStore = new BAlgorithmStore(this)
    bcppSummaryStore = new BCppSummaryStore(this)
    bdatastructureStore = new BDatastructureStore(this)

    loginStore = new LoginStore(this)
}

export default new RootStore()
