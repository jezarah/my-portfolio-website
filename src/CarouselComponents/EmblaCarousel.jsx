import React from 'react'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import './embla.css'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((skill) => (
                        <div className="embla__slide" key={skill.title}>
                            <div className="embla__slide__number">
                                {skill.title}
                                <img className={skill.image.fields.description}
                                     src={skill.image.fields.file.url}
                                     alt={skill.image.fields.title}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__button_wrapper">
                <div className="embla__controls">
                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel