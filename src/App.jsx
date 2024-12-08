
import { setLocale } from 'yup'
import FormUI from './assets/components/form/FormUI'

function App() {

    setLocale({
        mixed : {
            required : ({path}) => `وارد کردن ${path} الزامی است.`
        } ,
        string : {
            min : ({min , path}) => `حداقل طول فیلد ${path} باید ${min} باشد.`,
            email : () => `باید آدرس ایمــیل وارد نمایید`,
            matches : () => `نام کاربــری باید انگلیسی باشد`
        }
    })

  return (
    <>
        <FormUI />
    </>
  )
}

export default App
