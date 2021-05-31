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
  },
  UNMOUNT_EL_NOT_FOUND: (key) => {
    return {
      text: `Вначале нужно удалить ${key}`,
      variant: 'error'
    }
  },
  DELETION_SUCCESSFUL: (key) => {
    return {
      text: `Объект ${key} успешно удалён`,
      variant: 'success'
    }
  },
  ADDED_SECCESSFUL: (key) => {
    return {
      text: `Объект ${key} успешно добавлен`,
      variant: 'success'
    }
  },
  CASE_SUCCESSFUL_CHOOSEN: () => {
    return {
      text: `Корпус успешно выбран`,
      variant: 'success'
    }
  },
  CASE_SUCCESSFUL_CHANGED: () => {
    return {
      text: `Корпус успешно сменен`,
      variant: 'success'
    }
  },
  BUILD_SUCCESSFUL: () => {
    return {
      text: `Сборка компьютера завершена на 100%`,
      variant: 'success'
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
