import React, { Component } from 'react';
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related';
import ModalContainer from '../../widget/containet/modal'
import Modal from '../../widget/components/modal'
import HandleError from '../../error/containers/handleerror'
import VideoPlayer from '../../player/container/video-player'

class Home extends Component {
    state = {
        modalVisible:false,
        
    }
    handleOpenModal = (media) => {
        this.setState({
            modalVisible:true,
            media
        })
    }
    handleCloseModal = (event) =>{
        this.setState({
            modalVisible: false,
        })
    }
    render(){
        return(
            <HandleError>
            <HomeLayout>
                <Related />
                <Categories categories={this.props.data.categories} 
                handleOpenModal={this.handleOpenModal}/>
                {
                    this.state.modalVisible &&
                    <ModalContainer>
                    <Modal
                    handleCloseClick={this.handleCloseModal}
                    >
                    <VideoPlayer 
                        autoplay
                        src={this.state.media.src}
                        title={this.state.media.title}
                    />

                    </Modal>
                </ModalContainer>
                }
                
            </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;