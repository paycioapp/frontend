const StatusIntro = () => {
    return (
        <section className="py-24">
            <div className="site-width">
                <div className="border border-[#dadfe3] border-l rounded-lg p-8">
                    <div className="mb-0">
                        <span className="text-xl font-semibold text-[#1F1F1F]">Dear Partner,</span>
                    </div>

                    <div className="space-y-6 text-xl text-gray-800">
                        <p>
                            <span className="font-semibold">Please note:</span> a new <span className="font-semibold">EIP-7702</span> address format (proxy contracts)
                            has emerged on the Ethereum network. These addresses are temporarily recognized by the
                            network as contracts.
                        </p>

                        <p className="mt-0">
                            <span className="font-semibold">Important:</span> Our service currently does not support sending payouts
                            to such addresses. Please use only traditional addresses for transactions.
                        </p>

                        <p>
                            We are working on resolving the issue soon. Thank you for your patience.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default StatusIntro

