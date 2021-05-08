const locales = {
  MOUNT_EL_NOT_FOUND: (key) => {
    return {
      text: `Вначале нужно добавить ${key}`,
      variant: 'error'
    }
  },
  MOUNT_ARG_NOT_FOUND: (key) => {
    return {
      text: `Объект ${key[0]} должен иметь свойство ${key[1]} со значением ${key[2]}`,
      variant: 'error'
    }
  }
}

const handleNotify = ({ key, value, enqueueSnackbar }) => {
  const message = locales[key]
  if (!message) return
  const { text, variant } = message(value)

  enqueueSnackbar(text, { variant })
}

export default handleNotify
