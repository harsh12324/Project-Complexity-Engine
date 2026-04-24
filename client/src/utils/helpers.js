export function updateField(setFormData, key, value) {
  setFormData((prev) => ({ ...prev, [key]: value }));
}

export function classNames(...parts) {
  return parts.filter(Boolean).join(' ');
}
