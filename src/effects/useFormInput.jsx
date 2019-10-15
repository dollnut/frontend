import React, { useState } from "react"

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue)
  const handleChange = e => setValue(e.target.value)
}

export default useFormInput
