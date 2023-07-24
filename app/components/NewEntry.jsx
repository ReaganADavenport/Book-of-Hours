function NewEntry() {
    return(
        <form method="post" className="entry-form">
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" className="title" name="title" required />
            </p>
            <p>
                <label htmlFor="content">Content</label>
                <textarea className="content" name="content" rows={10} required/>
            </p>
            <div className="form-actions">
                <button>Add Entry</button>
            </div>

        </form>
    );
}

export default NewEntry