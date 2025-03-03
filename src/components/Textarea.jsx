export function TheInputComponent() {

    const textRef = useRef(null)
  
    // Function to adjust the height of the textarea to fit the content
    // must be called every time the content changes and on mount
    // You must assign the ref to the textarea: <textarea ref={textRef} .../>
    function adjustTextarea() {
      textRef.current.style.height = 'auto' // Reset the height to auto to prevent clipping
      textRef.current.style.height = 10 + textRef.current.scrollHeight + 'px' // Set the height to fit the content
    }
  
    return (
      ...
  
        <textarea ref={textRef}
          className="user-input"
          placeholder="Escribe un mensaje..."
          ...
        />
  
      ...
    )
  }
  