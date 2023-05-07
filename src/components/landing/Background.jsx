import React, { useState } from 'react';
import logo from '../../images/Group3.svg';
import Login from './Login';
import Register from './Register';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Background = ({ auth }) => {
  const [modal, setModal] = useState('');

  const closeModal = (e) => {
    if (e.target === e.currentTarget) setModal('');
  };
  const setLogin = () => {
    setModal('LOGIN');
  };
  const setRegister = () => {
    setModal('REGISTER');
  };

  if (auth.isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='landing-container'>
      <div className='modal'>
        {modal === 'LOGIN' ? (
          <Login close={closeModal} register={setRegister} />
        ) : modal === 'REGISTER' ? (
          <Register close={closeModal} login={setLogin} />
        ) : null}
      </div>
      <div className='content'>
        <div className='heading'>
          <h1>Riza</h1>
          <img src={logo} alt='logo' />
        </div>
        <h1>Safitri</h1>
        <div className='text-content'>
          <h2>maaf yaa zaa udah bikin penasaran</h2>
          <p>hope you here with me zaa</p>
          <div className='btn btn-primary' onClick={() => setModal('REGISTER')}>
            Meet Now With Me
          </div>
          <div className='btn btn-secondary' onClick={() => setModal('LOGIN')}>
            Tomorrow meet :D
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Background);
