const image =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7AARRHVja3kAAQAEAAAAZAAA/+EAGEV4aWYAAElJKgAIAAAAAAAAAAAAAAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTQxMjY2MjA0REE3MTFFMjhDMTk4RDU4NjFGNTFBNjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTQxMjY2MjE0REE3MTFFMjhDMTk4RDU4NjFGNTFBNjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NDEyNjYxRTREQTcxMUUyOEMxOThENTg2MUY1MUE2MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NDEyNjYxRjREQTcxMUUyOEMxOThENTg2MUY1MUE2MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/bAEMABQMEBAQDBQQEBAUFBQYH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'

export default image
