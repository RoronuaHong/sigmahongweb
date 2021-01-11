import AlgorithmStore from './AlgorithmStore'
import CppSummaryStore from './CppSummaryStore'

export class RootStore {
    cppSummaryStore = new CppSummaryStore(this)
    algorithmStore = new AlgorithmStore(this)
}

export default new RootStore()
