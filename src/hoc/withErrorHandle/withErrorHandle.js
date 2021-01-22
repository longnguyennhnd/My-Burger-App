import React,{Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandle = (WrappedComponent, axios) => {
    return class extends Component{
        state={
            error: null
        }
        componentDidMount(){
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            })
        }

        errorConfirmedHandle = () => {
            this.setState({error: null});
        }

        render(){
            return(
                <Aux>
                    <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandle}>
                        {this.state.error ? this.state.error.messege:  null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}


export default withErrorHandle;