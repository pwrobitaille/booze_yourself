import BoozeYourself from '../src/BoozeYourself';
import { shallow } from 'enzyme'

describe('BoozeYourself', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BoozeYourself/>
    )
  })

  it('should render NavBar components', () => {
    expect(wrapper.find('NavBar').length).toEqual(1)
  })

  it('should render Switch component', () => {
    expect(wrapper.find('Switch').length).toEqual(1)
  })

  it('should render a Route component', ()=>{
    expect(wrapper.find('Route').prop('path')).toEqual('/')
  })
})
