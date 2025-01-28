import { useNavigate } from 'react-router'
import { Modal } from '@/components/shared/modal/modal'
import { ModalActions } from '@/components/shared/modal/modal-actions'
import Button from '@/components/shared/Button/Button'
import { ButtonGroup } from '@/components/shared/Button/button-group'
import TextField from '@/components/shared/TextField/TextField'

export default function CreateTransaction() {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate(-1)
  }

  return (
    <Modal title="Add Transaction" onClose={handleClose}>
      <form style={{ width: 400 }}>
        <a href="/asd">hola</a>
        <TextField
          isRequired
          id="id"
          label="Label"
          errorMessage="Migrating styles to tailwind"
        />
      </form>

      <ModalActions>
        <ButtonGroup align="right">
          <Button variant="secondary">Cancel</Button>
          <Button>Save</Button>
        </ButtonGroup>
      </ModalActions>
    </Modal>
  )
}
