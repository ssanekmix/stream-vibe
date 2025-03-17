import classNames from 'classnames'
import './SliderNavigation.scss'
import Button from '@/components/Button'

const SliderNavigation = (props) => {
  const {
    className, 
    id, 
    hasPagination = true,
    mode = '', // '' (default) | 'tile'
  } = props

  return (
    <div
      className={classNames(className, 'slider-navigation', {
        [`slider-navigation--${mode}`]: mode,
      })}
      id={id}
      data-js-slider-navigation=""
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        mode="black-10"
        iconName="arrow-left"
        label="Previous Slide"
        isLabelHidden
        extraAttrs={{
          'data-js-slider-previous-button': ''
        }}
      />
      {hasPagination && (
        <div 
          className="slider-navigation__pagination"
          data-js-slider-pagination=""
        />
      )}
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        mode="black-10"
        iconName="arrow-right"
        label="Next Slide"
        isLabelHidden
        extraAttrs={{
          'data-js-slider-next-button': ''
        }}
      />
    </div>
  )
}

export default SliderNavigation