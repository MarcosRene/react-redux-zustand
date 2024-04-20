import { beforeEach, describe, expect, it } from 'vitest'
import { useStore as store } from './'

const courseMock = {
  id: 1,
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
        {
          id: 'w-DW4DhDfcw',
          title: 'Estilização do Post',
          duration: '10:05',
        },
      ],
    },
    {
      id: 2,
      title: 'Estrutura da aplicação',
      lessons: [
        {
          id: 'gE48FQXRZ_o',
          title: 'Componente: Comment',
          duration: '13:45',
        },
        { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
      ],
    },
  ],
}
const initialState = store.getState()

describe('Store: Course', () => {
  beforeEach(() => {
    store.setState(initialState)
  })

  it('should be able to play', () => {
    const { play } = store.getState()

    play([1, 2])

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toBe(1)
    expect(currentLessonIndex).toBe(2)
  })

  it('should be able to play next video automatically', () => {
    store.setState({ course: courseMock })

    const { next } = store.getState()

    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toBe(0)
    expect(currentLessonIndex).toBe(1)
  })

  it('should be able to jump to the next module automatically', () => {
    store.setState({ course: courseMock })

    const { next } = store.getState()

    store.setState({ currentLessonIndex: 1 })

    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toBe(1)
    expect(currentLessonIndex).toBe(0)
  })

  it('should not update the module and lesson index the there is no next lesson available', () => {
    store.setState({ course: courseMock })

    const { next } = store.getState()

    store.setState({ currentModuleIndex: 1, currentLessonIndex: 1 })

    next()

    const { currentModuleIndex, currentLessonIndex } = store.getState()

    expect(currentModuleIndex).toBe(1)
    expect(currentLessonIndex).toBe(1)
  })
})