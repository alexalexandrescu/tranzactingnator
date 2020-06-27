import React from 'react';
import { Container } from 'react-bootstrap';
import Dropzone from 'react-dropzone'
import Papa from 'papaparse';

class App extends React.Component {

  onFileDrop(files: File[]) {
    // console.log(files);

    Papa.parse(files[0], {
      complete: (data: any) => {
        console.log(data);
      }
    });
  }

  render() {
    return (
      <Container>
        <Dropzone onDrop={this.onFileDrop}>
          {({getRootProps, getInputProps}) => (
            <section className={"border bg-light text-center"}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
      </Container>
    );
  }
}

export default App;
