import {Heading, CustomButton} from './styledComponents'

import './App.css'

const App = () => (
  <>
    <Heading>Hello World</Heading>
    {/* <CustomButton type="button" outline={false}>
      Click
    </CustomButton>
    <CustomButton type="button" outline={true}>
      Save
    </CustomButton> */}
    {/* now below we mentioned just outline which have so its like boolean value, instead of mentioning like
    outlie={true} or outlie={false} */}
    <CustomButton type="button">Click</CustomButton>
    <CustomButton type="button" outline>
      Save
    </CustomButton>
  </>
)
export default App
