import React,{useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/modal';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';
//import useFirestore from './hooks/useFirestore';

function App() {
  const [selectedImg , setselectedImg]=useState(null);


  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setselectedImg={setselectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setselectedImg={ setselectedImg }/>}
    </div>
  );
}

export default App;
