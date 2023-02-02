import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
      <ThreeDots
        height="60"
        width="60"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: 'center' }}
        visible={true}
      />
    )
}

export default Loader