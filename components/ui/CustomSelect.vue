<template>
  <div class="relative">
    <label class="block text-sm font-medium text-gray-700 mb-2">
      {{ label }}
    </label>

    <div @click="toggleDropdown"
      class="min-h-[40px] w-full px-3 py-2 border border-gray-300 rounded-lg bg-white flex flex-wrap gap-2 items-center cursor-pointer">
      <template v-if="multiple && selectedOptions.length">
        <span
          v-for="opt in selectedOptions"
          :key="opt[optionValue]"
          class="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
          {{ opt[optionLabel] }}
          <button @click.stop="removeOption(opt)" class="ml-1 text-xs">×</button>
        </span>
      </template>
      <template v-else-if="!multiple && selectedOptions.length">
        {{ selectedOptions[0][optionLabel] }}
      </template>
      <span v-else class="text-gray-400">{{ placeholder }}</span>

      <div class="ml-auto">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>

    <div v-if="showDropdown" class="absolute mt-1 w-full z-50 bg-white border border-gray-300 rounded-lg shadow-md">
      <input
        v-model="search"
        class="w-full px-3 py-2 border-b border-gray-200 outline-none"
        placeholder="Cari..."
      />
      <ul class="max-h-60 overflow-y-auto">
        <li
          v-for="option in filteredOptions"
          :key="option[optionValue]"
          @click="selectOption(option)"
          class="px-4 py-2 hover:bg-blue-100 cursor-pointer flex items-center justify-between"
        >
          {{ option[optionLabel] }}
          <span v-if="isSelected(option)" class="text-blue-600 text-sm">✔</span>
        </li>
        <li v-if="filteredOptions.length === 0" class="px-4 py-2 text-gray-500 text-sm">Empty result</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, toRef } from 'vue'

const props = defineProps({
  modelValue: [String, Number, Array],
  options: { type: Array, required: true },
  label: String,
  placeholder: { type: String, default: 'Pilih item' },
  optionLabel: { type: String, default: 'name' },
  optionValue: { type: String, default: 'id' },
  multiple: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue'])

const search = ref('')
const showDropdown = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
  search.value = ''
}

const filteredOptions = computed(() => {
  if (!search.value) return props.options
  return props.options.filter((opt) =>
    String(opt[props.optionLabel]).toLowerCase().includes(search.value.toLowerCase())
  )
})

const isSelected = (option) => {
  const value = option[props.optionValue]
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(value)
  } else {
    return props.modelValue === value
  }
}

const selectedOptions = computed(() => {
  if (props.multiple) {
    return props.options.filter(opt => props.modelValue?.includes(opt[props.optionValue]))
  } else {
    return props.options.filter(opt => opt[props.optionValue] === props.modelValue)
  }
})

const selectOption = (option) => {
  const value = option[props.optionValue]
  if (props.multiple) {
    const current = Array.isArray(props.modelValue) ? [...props.modelValue] : []
    const index = current.indexOf(value)
    if (index === -1) current.push(value)
    else current.splice(index, 1)
    emit('update:modelValue', current)
  } else {
    emit('update:modelValue', value)
    showDropdown.value = false
  }
}

const removeOption = (option) => {
  if (!props.multiple) return
  const value = option[props.optionValue]
  const current = Array.isArray(props.modelValue) ? [...props.modelValue] : []
  emit('update:modelValue', current.filter(v => v !== value))
}
</script>
