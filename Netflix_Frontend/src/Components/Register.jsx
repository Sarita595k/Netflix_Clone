export const Register = () => {
    return (
        <div>
            <h3>ready to watch?enter your email to create or restart your membership.</h3>
            <div className="div">
                <input type="email" name="email" id="userEmail" placeholder="Email" autoComplete="off" />
                <button type="submit">get started</button><br />
            </div>
        </div>
    )
}