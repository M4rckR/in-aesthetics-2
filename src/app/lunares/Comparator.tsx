import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export const Comparator = () => {
  return (
    <div className='max-w-4xl mx-auto px-4'>
        <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src='/images/antes.png' alt='before' />}
            itemTwo={<ReactCompareSliderImage src='/images/despues.png' alt='after' />}
        />
    </div>
  )
}   
