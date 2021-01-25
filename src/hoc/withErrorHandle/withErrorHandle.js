import React,{Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandle = (WrappedComponent, axios) => {
    return class extends Component{
        state={
            error: null
        }
        componentWillMount(){
            
        }
        
        componentWillUnmount(){
            console.log('Will Unmout', this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
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