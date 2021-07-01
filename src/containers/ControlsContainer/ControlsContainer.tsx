import { connect } from "react-redux"
import { Controls } from "../../components/Controls/Controls"
import { setAutoUpdate, setStopUpload } from "../../redux/postsSlice"
import { RootState } from "../../redux/store"

interface IControlsContainer {
    stopUpload: boolean
    setStopUpload: (isEnable: boolean) => void
    autoUpdate: boolean
    setAutoUpdate: (isEnable: boolean) => void
}

let ControlsContainer: React.FC<IControlsContainer> = (props) => {
    return (
        <Controls {...props}/>
    )
}

const mapStateToProps = (state: RootState) => ({
    stopUpload: state.posts.stopUpload,
    autoUpdate: state.posts.autoUpdate
})

export default connect(mapStateToProps, {setStopUpload, setAutoUpdate})(ControlsContainer)