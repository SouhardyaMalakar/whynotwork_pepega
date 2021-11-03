import { useRouter } from 'next/router'

const article = ({article}) => {
  const router = useRouter()
    return (
      <div >
        <div >'
        <div > 
        <Sidebar/>
        </div>  
        <div >
          <div >
          <h1>{article.title}</h1>       
          </div>
          <div>
          <h3>{article.body}</h3>  
          <h4>{article.id}</h4>  
          </div>
        </div>
    </div>
    <button onClick={() => router.back()}> Back</button>

    </div>
    ) 
}
