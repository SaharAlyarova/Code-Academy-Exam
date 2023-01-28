import React from 'react'
import { Collapse } from 'antd';

const MyEndSection = () => {
    const { Panel } = Collapse;
    const text = `
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
`;
    const onChange = (key) => {
        console.log(key);
      };
  return (
    <div className='container'>
      <div className='endsectionContainer'>
        <div><img src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg" alt="" /></div>
        <div className='paragh'>
           <div> <h1>We Have Legal Solutions</h1></div>
           <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?

Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.</p></div>
       <div className='legalSolitions'>
       <div className='divparagicons'>
       <i class="fa-solid fa-check"></i>
       <p>Aperiam iste nam molestias</p>
       </div >
       <div className='divparagicons'>
       <i class="fa-solid fa-check"></i>
       <p>Modi perferendis ipsa</p>
       </div>
       <div className='divparagicons'>
       <i class="fa-solid fa-check"></i>
       <p>Perspic iste culpa</p>
       </div>
       </div>
        </div>
        <div className='collapce'>
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="This is panel header 1" key="1">
        <p style={{color:"gray"}}>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p style={{color:"gray"}}>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p style={{color:"gray"}}>{text}</p>
      </Panel>
    </Collapse>
        </div>
      </div>
    </div>
  )
}

export default MyEndSection
