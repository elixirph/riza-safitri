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
          <h1>Sari</h1>
          <img src={logo} alt='logo' />
        </div>
        <h1>Wulandari</h1>
        <div className='text-content'>
          <h2>I Miss you bae</h2>
          <p>I hope you here with me & always with me</p>
          <div className='btn btn-primary' onClick={() => setModal('REGISTER')}>
            Meet Now With Me
          </div>
          <div className='btn btn-secondary' onClick={() => setModal('LOGIN')}>
            Check In :D
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
