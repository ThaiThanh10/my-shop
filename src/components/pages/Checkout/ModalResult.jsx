import { Button, Modal, Result, Spin } from "antd"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const ModalResult = ({ order, isModalOpen, setIsModalOpen }) => {
    // const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()
    const showModal = () => {
        setIsModalOpen(true)
    }
    const handleOk = () => {
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }
    return (
        <Modal
            open={isModalOpen}
            onOk={handleOk}
            okButtonProps={{ styles: { background: "#000" }, type: "default" }}
            onCancel={handleCancel}
        >
            {order?.customer ? (
                <Result
                    status="success"
                    title="Successfully Purchased  "
                    subTitle={`Order ref: ${order?.customer_reference} .`}
                    extra={[
                        <h1 className="mb-[10px]">
                            Check your email for details. If you have any trouble, then contact us
                        </h1>,
                        <Button
                            onClick={() => navigate("/")}
                            key="buy"
                        >
                            Continue Buying
                        </Button>,
                    ]}
                />
            ) : (
                <div className="flexCenter">
                    <Spin
                        tip="Loading"
                        size="large"
                    />
                </div>
            )}
        </Modal>
    )
}

export default ModalResult
