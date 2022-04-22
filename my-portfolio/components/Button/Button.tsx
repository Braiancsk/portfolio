import Link from 'next/link'

type buttonProps = {
  isLink:boolean
  url?: string
  text: string
  outlined: boolean
  border: boolean
  onClick?: () => void
}
function Button({text, outlined,onClick,url,isLink, border}:buttonProps) {

    return(
      <>
      {isLink 
      ?
      <Link href={`${url}`}>
        <a
        title={text}
        className={`
        transition duration-500 p-3 w-full block text-center rounded-md font-bold text-sm md:text-xl
        ${!outlined ? 'dark:bg-primary dark:hover:bg-darker dark:text-black/80 dark:hover:text-white hover:bg-light-btn bg-light-btn-hover text-white' : ''}
        ${outlined ? 'bg-transparent border-2 dark:text-white text-black/80' : ''} 
        ${border 
        ? 
        'relative button-border after:z-[-1] after:rounded-md after:w-full after:h-full after:absolute after:top-[8px] after:right-[-8px] after:border-2 dark:after:border-primary dark:border-primary border-light-btn after:border-light-btn'
         :
        ''}`}>
          {text}
        </a>
      </Link>
      :
      <button 
      title={text}
      onClick={onClick} 
      className={`
        transition duration-500 p-3 w-full block text-center rounded-md font-bold text-sm md:text-xl
        ${!outlined ? 'dark:bg-primary dark:hover:bg-darker dark:text-black/80 dark:hover:text-white hover:bg-light-btn bg-light-btn-hover text-white' : ''}
        ${outlined ? 'bg-transparent border-2 dark:text-white text-black/80' : ''} 
        ${border 
        ? 
        'relative button-border after:z-[-1] after:rounded-md after:w-full after:h-full after:absolute after:top-[8px] after:right-[-8px] after:border-2 dark:after:border-primary dark:border-primary border-light-btn after:border-light-btn'
         :
        ''}`}>
        
      {text}
      </button>
      }
      </>  
    )
    


}

export default Button;
