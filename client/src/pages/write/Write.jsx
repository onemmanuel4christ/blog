import "./write.css"

export const Write = () => {
  return (
    <div className="write">
        <img src="https:/leverageedu.com/blog/wp-content/uploads/2019/11/Modern-Education.png"
         alt="" 
        className="writeImage"
        />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput"><i className="writeIcon fa-regular fa-plus"></i></label>
                <input type="file" id="fileInput" style={{display: 'none'}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">
                Publish
            </button>
        </form>
    </div>
  )
}
