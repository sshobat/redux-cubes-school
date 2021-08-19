import { connect } from "react-redux";

const Users = (props) => {
    console.log(props);
    return (
        <h2>Users</h2>
    );
}

const mapStateToProps = state => {
    return {
        name: state.name,
    }
}

export default connect(mapStateToProps)(Users);