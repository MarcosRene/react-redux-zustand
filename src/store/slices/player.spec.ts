import { describe, expect, it } from 'vitest'
import { PlayerState, next, play, player  as reducer } from './player'

const initialState: PlayerState = {
  course: {
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
  },
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  isLoading: false,
}

describe('Slice: Player', () => {
  it('should be able to play', () => {
    const state = reducer(initialState, play([1, 2]))

    expect(state.currentModuleIndex).toBe(1)
    expect(state.currentLessonIndex).toBe(2)
  })

  it('should be able to play next video automatically', () => {
    const state = reducer(initialState, next())

    expect(state.currentModuleIndex).toBe(0)
    expect(state.currentLessonIndex).toBe(1)
  })
  
  it('should be able to jump to the next module automatically', () => {
    const state = reducer({
      ...initialState, 
      currentLessonIndex: 1 
    }, next())

    expect(state.currentModuleIndex).toBe(1)
    expect(state.currentLessonIndex).toBe(0)
  })

  it('should not update the module and lesson index the there is no next lesson available', () => {
    const state = reducer({
      ...initialState, 
      currentModuleIndex: 1,
      currentLessonIndex: 1
    }, next())

    expect(state.currentModuleIndex).toBe(1)
    expect(state.currentLessonIndex).toBe(1)
  })
})