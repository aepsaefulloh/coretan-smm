export const useConfirmation = () => {
  const isOpen = ref(false)
  const loading = ref(false)
  const config = ref({
    type: 'confirm',
    title: '',
    message: '',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    loadingText: 'Processing...',
    closeOnBackdrop: true
  })
  
  let resolvePromise = null
  let rejectPromise = null

  const show = (options = {}) => {
    return new Promise((resolve, reject) => {
      config.value = {
        ...config.value,
        ...options
      }
      
      resolvePromise = resolve
      rejectPromise = reject
      isOpen.value = true
    })
  }

  const confirm = async () => {
    if (resolvePromise) {
      loading.value = true
      try {
        await resolvePromise(true)
        close()
      } catch (error) {
        loading.value = false
        throw error
      }
    }
  }

  const cancel = () => {
    if (rejectPromise) {
      rejectPromise(false)
    }
    close()
  }

  const close = () => {
    isOpen.value = false
    loading.value = false
    resolvePromise = null
    rejectPromise = null
  }

  // Preset configurations for common use cases
  const showDeleteConfirmation = (itemName = 'this item') => {
    return show({
      type: 'delete',
      title: 'Delete Confirmation',
      message: `Are you sure you want to delete ${itemName}? This action cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      loadingText: 'Deleting...'
    })
  }

  const showSaveConfirmation = (message = 'Do you want to save your changes?') => {
    return show({
      type: 'info',
      title: 'Save Changes',
      message,
      confirmText: 'Save',
      cancelText: 'Discard',
      loadingText: 'Saving...'
    })
  }

  const showLogoutConfirmation = () => {
    return show({
      type: 'confirm',
      title: 'Sign Out',
      message: 'Are you sure you want to sign out of your account?',
      confirmText: 'Sign Out',
      cancelText: 'Cancel',
      loadingText: 'Signing out...'
    })
  }

  return {
    isOpen: readonly(isOpen),
    loading: readonly(loading),
    config: readonly(config),
    show,
    confirm,
    cancel,
    close,
    showDeleteConfirmation,
    showSaveConfirmation,
    showLogoutConfirmation
  }
}