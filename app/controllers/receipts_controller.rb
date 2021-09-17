class ReceiptsController < ApplicationController
  before_action :set_receipt, only: [:show, :update, :destroy]

  # GET /users
  def index
    @receipts = Receipt.all

    render json: @receipts, include: :images
  end

  # GET /1
  def show
    render json: @receipt, include: :images
  end

  # POST 
  def create
    @receipt = Receipt.new(receipt_params)

    if @receipt.save
      render json: @receipt, status: :created, location: @receipt
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT
  def update
    if @receipt.update(receipt_params)
      render json: @receipt
    else
      render json: @receipt.errors, status: :unprocessable_entity
    end
  end

  # DELETE 
  def destroy
    @receipt.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_receipt
      @receipt = Receipt.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def receipt_params
      params.require(:receipt).permit(:amount, :catagory, :date, :note, :title, :user_id)
    end
end
