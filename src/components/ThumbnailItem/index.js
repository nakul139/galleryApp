import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? `thumbnail Active` : `thumbnail`

  const onClickThumbnail = () => {
    setActiveThumbnail(id)
  }

  return (
    <li className="list-images">
      <button className="button" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
