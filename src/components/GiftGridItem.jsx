

export const GiftGridItem = ({title,url,id}) => {

  return (
    <div className="card">
       <img src={url} alt={title} />
       <p>{title}</p>
               
    </div>
  )
}
