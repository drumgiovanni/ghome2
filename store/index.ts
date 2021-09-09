import {
    reactive,
    Ref,
    toRefs
} from '@vue/composition-api';
import {
    // GetterTree,
    ActionTree,
    MutationTree
} from 'vuex'
import { getAccessorType } from 'typed-vuex'

export const state = () => ({
    user: {} as any
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
      if (!authUser) {
          state.user = null
      } else {
          const { uid, displayName } = authUser
          state.user = { uid, displayName }
      }
  }
}

export const actions: ActionTree<RootState, RootState> = {
    onAuthStateChangedAction(context, { authUser, claims}) {
        if (!authUser) return;
        context.commit('ON_AUTH_STATE_CHANGED_MUTATION', authUser)
    }
}

export const accessorType = getAccessorType({
    state,
    // getters,
    mutations,
    // actions,
    // modules: {}
})