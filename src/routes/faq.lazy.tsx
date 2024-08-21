import { createLazyFileRoute } from '@tanstack/react-router'
import { categories } from '../pages/FAQContent'
import Wrapper from '../components/Wrapper'



export const Route = createLazyFileRoute('/faq')({
  component: FAQ,
})

function FAQ() {
  
  return (
    <Wrapper>
    {categories.map((category) => (
            <Categories id={category} key={category}>
              {category}
            </Categories>
          ))}
            
            </Wrapper>
    
  )
}

function Categories({ id, children }) {
  return (
    <div id={id}>
      {children}
    </div>
  )
}